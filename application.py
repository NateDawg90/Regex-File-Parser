from flask import Flask, jsonify
from flask import abort
from flask import request
from flask_cors import CORS, cross_origin
import re
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)
SITE_ROOT = os.path.realpath(os.path.dirname(__file__))

CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def index():
    return 'Try the /parse endpoint!'

@app.route('/parse', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def parse():
    matches = []
    req = request.form 
    if not req:
        abort(400)
    regex = req.get('regex')
    fileContent = str(request.files['file'].read()).replace(r'\n', '')

    p = re.compile(regex)
    for r in p.finditer(fileContent):
        matches.append(r.start())

    response = jsonify({'matches': matches})
    return response

if __name__ == '__main__':
    app.run(debug=True)