from PIL import Image
import os
from random import randint

# Paths
image_dir = './backgrounds/'  # Directory containing 1.jpg to 40.jpg
mask_dir = './og_masks/'  # Directory containing transparent PNG masks
output_base_dir = './'  # Base directory to save the results

# Ensure the mask directory exists
if not os.path.exists(mask_dir):
    print(f"Mask directory '{mask_dir}' does not exist.")
    exit()

# Get list of mask files
mask_files = [f for f in os.listdir(mask_dir) if f.endswith('.png')]

# Process each mask
for mask_file in mask_files:
    mask_path = os.path.join(mask_dir, mask_file)
    mask = Image.open(mask_path).convert("RGBA")
    
    # Create output directory named after the mask filename (without extension)
    output_dir = os.path.join(output_base_dir, os.path.splitext(mask_file)[0])
    os.makedirs(output_dir, exist_ok=True)
    
    # Process each image (1.jpg to 40.jpg)
    for i in range(1, 41):
        image_path = os.path.join(image_dir, f"{i}.jpg")
        if not os.path.exists(image_path):
            print(f"Image '{image_path}' does not exist. Skipping.")
            continue
        
        image = Image.open(image_path).convert("RGBA")
        
        # Resize the mask to be 1/10th of the image dimensions
        mask_resized = mask.resize(
            (image.width // 2, image.height // 2), Image.Resampling.LANCZOS
        )
        
        # Create a new blank image with the same size as the original image
        blank_image = Image.new("RGBA", image.size, (0, 0, 0, 0))
        
        # Determine mask position
        if mask_file != "F12G.png":
            # Place the mask in the lower half or third of the image
            mask_position = (
                randint(0, image.width - mask_resized.width),
                max(10+(mask_resized.height//2), randint( (image.height - mask_resized.height) // 3, image.height - mask_resized.height)),
            )
        else:
            # Generate random position for the mask within image bounds
            mask_position = (
                randint(0, image.width - mask_resized.width),
                randint(0, image.height - mask_resized.height),
            )
        
        # Paste the resized mask onto the blank image (calculated position)
        blank_image.paste(mask_resized, mask_position, mask_resized)
        
        # Overlay the mask on the image
        combined = Image.alpha_composite(image, blank_image)
        
        # Save the result
        output_path = os.path.join(output_dir, f"{os.path.splitext(mask_file)[0]}_{i}.png")
        combined.save(output_path, format="PNG")

print("Processing complete.")