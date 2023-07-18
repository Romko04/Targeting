
<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Перевірка, чи відправлені обов'язкові поля
  if (empty($_POST['user_name']) || empty($_POST['user_phone'])) {
    header('Location: validate.html');
    exit;
  }

  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];
  $business = $_POST['user_business'];

  $token = "6325500727:AAFaRk3B2ci61rW80CTuzn52FB5Q30htCIs"; // Замініть на свій токен
  $chat_id = "-987273048";
  $arr = array(
    'Ім\'я користувача: ' => $name,
    'Телефон: ' => $phone,
    'Бізнес: ' => $business
  );

  $txt = "";
  foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
  }

  // Відправка даних до Telegram
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

  if ($sendToTelegram) {
    header('Location: thank-you.html');
  } else {
    echo "Error";
  }
}
?>
