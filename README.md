# Welcome to Hey! campaign creatore

# Hosting the web app:

```sh
# Make sure you have npm and that you are in root of project
# Install the necessary dependencies
npm i

# Start frontend in dev
npm run dev

# Make sure you have python
# Install requirements (recommended to do in virtual environment)
pip install -r requirements.txt

# Run the backend
python back.py
```
## What technologies are used for this project?

This project is built with .
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Flask

## How it works:

Frontend provides a form to setup queries which are sent to backend.
Backend transforms query into a prompt for flux api where we host our finetuned flux model.
We wait for generated images from flux api, once they are downloaded we put them in uploads folder.
Frontend is hardcoded to display images on feedback form from this folder once backend returns ok status code.
Feedback form allows user to ask the flux model to improve a given image.
Until user is statisfied we reload feedback form, at the bottom is a download button for selected image.

# Training of the model:

Trainingdata folder contains stance images and background images.
With the combine.py script you can combine the masks onto the backgrounds to create a training set per stance.
make_captions.py uses hardcoded dictionary to build caption files.
train_api.py is a way to start a replicate training in python.

Required libraries:
- pillow (for combine.py)
- replicate (for train_api.py)