let body= $response.body;
var obj = JSON.parse(body);
var bundle_id = obj.receipt["bundle_id"];
if (bundle_id == "com.sugarmo.ScrollClip") {
obj = {"receipt": {
    "receipt_type": "Production",
    "adam_id": 1208145167,
    "app_item_id": 1208145167,
    "bundle_id": "com.sugarmo.ScrollClip",
    "application_version": "3071",
    "download_id": 9999,
    "version_external_identifier": 836040692,
    "receipt_creation_date": "2020-05-2209:01:14Etc/GMT",
    "receipt_creation_date_ms": "1590138074000",
    "receipt_creation_date_pst": "2020-05-2202:01:14America/Los_Angeles",
    "request_date": "2020-05-2209:04:43Etc/GMT",
    "request_date_ms": "1590138283047",
    "request_date_pst": "2020-05-2202:04:43America/Los_Angeles",
    "original_purchase_date": "2020-05-2208:56:54Etc/GMT",
    "original_purchase_date_ms": "1590137814000",
    "original_purchase_date_pst": "2020-05-2201:56:54America/Los_Angeles",
    "original_application_version": "3071",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.sugarmo.ScrollClip.pro",
      "transaction_id": "1000000000000000",
      "original_transaction_id": "1000000000000000",
      "purchase_date": "2020-01-0100:00:00Etc/GMT",
      "purchase_date_ms": "1587700000000",
      "purchase_date_pst": "2020-01-2100:00:00America/Los_Angeles",
      "original_purchase_date": "2020-01-0100:00:00Etc/GMT",
      "original_purchase_date_ms": "1587700000000",
      "original_purchase_date_pst": "2020-01-0100:00:00America/Los_Angeles",
      "is_trial_period": "false"
    }]
  },
  "status": 0,
  "environment": "Production"
}
    }
else if (body.indexOf("expires") !=-1) {
  obj["receipt"]["in_app"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["receipt"]["in_app"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date_ms"] = "4096019658000";
  obj["latest_receipt_info"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["latest_receipt_info"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["latest_receipt_info"][0]["expires_date_ms"] = "4096019658000";
  }
$done({body: JSON.stringify(obj)});
