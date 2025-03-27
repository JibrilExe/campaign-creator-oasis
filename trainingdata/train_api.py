import os
import replicate

os.environ["REPLICATE_API_TOKEN"] = "your-replicate-token"
#hugging face was easy option but you can use any cloud solution to get a direct link to your zip
data = "https://huggingface.co/datasets/JibrilExe/data_hey/resolve/main/data.zip"

training = replicate.trainings.create(
  destination="repo-name",
  version="ostris/flux-dev-lora-trainer:b6af14222e6bd9be257cbc1ea4afda3cd0503e1133083b9d1de0364d8568e6ef",
  input={
    "steps": 1500,
    "lora_rank": 16,
    "optimizer": "adamw8bit",
    "batch_size": 1,
    "resolution": "512,768,1024",
    "autocaption": False,
    "input_images": data,
    "trigger_word": "TOK",
    "learning_rate": 0.0004,
    "wandb_project": "flux_train_replicate",
    "wandb_save_interval": 100,
    "caption_dropout_rate": 0.00,
    "cache_latents_to_disk": False,
    "wandb_sample_interval": 100,
    "gradient_checkpointing": False
  },
)