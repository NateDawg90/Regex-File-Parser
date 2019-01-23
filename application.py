from flask import Flask, jsonify
from flask import abort
from flask import request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

# cors = CORS(app, resources={r"/parse": {"origins": "http://localhost:3000"}})

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/parse', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def parse():
    req = request.form 
    regex = req.get('regex')
    fileContent = req.get('file')
    print("Request = ", request.form.get_json())
    if not req:
        abort(400)
    # file = req.get('file', 'content')
    response = jsonify({'some results'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True)