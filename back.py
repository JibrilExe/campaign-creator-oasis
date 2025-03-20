import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/', methods=['POST'])
def receive_json():
    """
    Handle JSON POST requests and CORS preflight requests.
    """
    data = request.get_json()
    print(data)  # Print received JSON
    return jsonify(data), 200  # Return HTTP 200 OK

if __name__ == "__main__":
    app.run(debug=True, port=5000)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)