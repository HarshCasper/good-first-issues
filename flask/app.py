from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from general_info import get_info
from issues import get_issues

app = Flask(__name__)

# db configuration
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///db.sqlite3'


db = SQLAlchemy(app)


class Repository(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.String(80))
    title = db.Column(db.String(80))
    language = db.Column(db.String(80))
    stars = db.Column(db.Integer)
    url = db.Column(db.String(80))
    description = db.Column(db.String(80))


@app.route("/")
@app.route('/index')
def index():
    repositories = Repository.query.order_by(Repository.stars.desc()).all()
    return render_template('index.html', repositories=repositories)


@app.route('/addRepository', methods=['POST', 'GET'])
def addRepository():
    if request.method == 'POST':
        owner = request.form.get('owner')
        title = request.form.get('title')
        result = get_info(owner, title)
        language = result['language']
        stars = result['stargazers_count']
        url = result['html_url']
        description = result['description']
        new_repository = Repository(
            owner=owner, title=title, language=language, stars=stars, url=url, description=description)
        db.session.add(new_repository)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        return render_template('addRepository.html')


@app.route('/viewDetailsOfRepository', methods=['POST'])
def viewDetailsOfRepository():
    form_value = request.form['owner_title']
    owner = form_value.split(",")[0]
    title = form_value.split(",")[1]
    issues = get_issues(owner, title)
    general_info = get_info(owner, title)
    return render_template('viewDetailsOfRepository.html', issues=issues, general_info=general_info)


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
