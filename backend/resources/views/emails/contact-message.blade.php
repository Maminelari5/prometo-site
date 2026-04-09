<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Nouveau message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.7; color: #1f2a30;">
    <h2>Nouveau message depuis le site PROMETO</h2>

    <p><strong>Nom :</strong> {{ $data['name'] }}</p>
    <p><strong>Email :</strong> {{ $data['email'] }}</p>
    <p><strong>Téléphone :</strong> {{ $data['phone'] ?? '-' }}</p>
    <p><strong>Message :</strong></p>
    <p>{{ $data['message'] }}</p>
</body>
</html>