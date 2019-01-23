

# For your programming challenge, we'd like you to implement a web-based string search application. The user inputs a regular expression (e.g. A.*32b+Y), an input file name to parse, and will output all indices with the matching regular expression (e.g. Found AJT32bbY at index 45, line 235). Implement the regular expression parser from scratch and as a Python/Golang package that's called by the app. The regular expression grammar is limited to just the elements below, and you can assume either a 'greedy' or 'lazy' match policy -- be sure to specify which. You may use existing software in the wild except for the regular expression parser which must be your implementation.

# Regular expression grammar: 
# .	#match any 1 character 
# *	#wildcard, match the previous letter or '.' 0 or more times 
# +	#wildcard, match the previous letter 1 or more times 
# Any letter or number	#[a-zA-Z0-9]

# Application command line: 
# find_substring '' 
# Example: find_substring dna_sequence.txt 'AT+CG.*' 

from flask import Flask, jsonify
from flask import abort
from flask import request
from flask_cors import CORS, cross_origin
import re
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)
SITE_ROOT = os.path.realpath(os.path.dirname(__file__))

CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/parse', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def parse():
    req = request.form 
    if not req:
        abort(400)
    regex = req.get('regex')
    fileContent = str(request.files['file'].read())

    # Connor's code
    file = request.files['file']
    filename = secure_filename(file.filename)
    # Find indices of regex string in file
    # for i, startChar in fileContent:
    #     if regex[i] == startChar:

    #     for j, endChar in regex:

    fileContent2 = fileContent.replace('\n', '')
    print('whatever!!!', fileContent2)

    # m = re.search(regex, file1)
    # print(m)

    response = jsonify({'some': 'results'})
    return response

if __name__ == '__main__':
    app.run(debug=True)