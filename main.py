from flask import Flask, jsonify
app = Flask(__name__)
is_streaming = False
@app.route('/toggle_stream')
def toggle_stream():
    global is_streaming
    is_streaming = not is_streaming
    return jsonify({"streaming": is_streaming})
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)