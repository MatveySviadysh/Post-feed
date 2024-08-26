from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api_root():
    return jsonify({"message": "Hello, this is your API!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8002)
