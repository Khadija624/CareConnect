from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS  
import os

app = Flask(__name__)
CORS(app)  

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')  
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')  

mail = Mail(app)

@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({"message": "Veuillez fournir une adresse e-mail."}), 400

  
    msg = Message(
        'Réinitialisation de votre mot de passe',
        sender=app.config['MAIL_USERNAME'],
        recipients=[email]
    )
    msg.body = f"Bonjour,\n\nCliquez sur ce lien pour réinitialiser votre mot de passe : \n https://votre-site.com/reset-password?email={email}"
    
    try:
        mail.send(msg)  
        return jsonify({"message": "Un lien de réinitialisation a été envoyé à votre adresse e-mail."}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Erreur lors de l'envoi de l'email."}), 500

if __name__ == '__main__':
    app.run(debug=True)


