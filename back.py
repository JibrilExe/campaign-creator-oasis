import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import replicate

app = Flask(__name__)
CORS(app, supports_credentials=True)
os.environ["REPLICATE_API_TOKEN"] = "r8_NDulUdyyUZT9mAkOe4tedaKfsJgm1sA4SqfIc"

@app.route('/', methods=['POST'])
def receive_json():
    """
    Handle JSON POST requests and CORS preflight requests.
    """
    data = request.get_json()
    
    # Extract specific keys from the received JSON
    season = data.get('season', '')
    position = data.get('position', '')
    stance = data.get('stance', '')
    extra_prompt = data.get('extra_prompt', '')
    color = data.get('color', '')
    scenery = data.get('scenery', '')
    
    end = "with a clear logo and red cape."
    next = "flying"
    if stance == "S2LB":
        end = "with a clear logo."
        next = "laying"

    prompt = ""
    if extra_prompt:
        prompt = extra_prompt
    else:
        prompt_parts = [stance, next]  # Start with stance

        if scenery:
            prompt_parts.append(f"in a {scenery} setting")
        if season:
            prompt_parts.append(f"during {season}")
        
        # Join everything and add the final part
        prompt = " ".join(prompt_parts) + f" {end}"

    # Print extracted values and final prompt
    print(f"Season: {season}, Position: {position}, Stance: {stance}, Extra Prompt: {extra_prompt}, Color: {color}, Scenery: {scenery}")
    print(f"Final Prompt: {prompt}")

    output = replicate.run(
        "jibrilexe/hey_marketingv1.2.1:4cc3afe114241565a0a98fdb5c61f01274cba24dc17a25b03e55a11a0ca2740a",
        input={
            "prompt": prompt,
            "model": "dev",
            "go_fast": False,
            "lora_scale": 1,
            "megapixels": "1",
            "num_outputs": 2,
            "aspect_ratio": "1:1",
            "output_format": "webp",
            "guidance_scale": 3,
            "output_quality": 80,
            "prompt_strength": 0.8,
            "extra_lora_scale": 1,
            "num_inference_steps": 28
        }
    )
    
    # Save the generated image
    with open('./uploads/output1.png', 'wb') as f:
        f.write(output[0].read())
    with open('./uploads/output2.png', 'wb') as f:
        f.write(output[1].read())
    print(f"Image saved as output.png")

    return jsonify(data), 200  # Return HTTP 200 OK

if __name__ == "__main__":
    app.run(debug=True, port=5000)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)