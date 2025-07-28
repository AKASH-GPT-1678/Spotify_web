import requests

token = "BQDWtpyNALYthhoTANPhI0UYPOCRtL9GXUMggRJi22t3HzbR7Gg99MAOYw8kgVih8qhc_P2XlkQzVWTCCKw7C1zAjgM8xGhmpkXX-lJEXEt0SL5llKKdCzU0DXGV1TcRv3DtcV8uk-k"
headers = {"Authorization": f"Bearer {token}"}

# Try getting user profile info - a basic endpoint
try:
    response = requests.get("https://api.spotify.com/v1/me", headers=headers)
    response.raise_for_status()
    print("Token works! User info:", response.json())
except requests.exceptions.HTTPError as err:
    print(f"Token may be invalid: {err}")
    print(f"Response body: {response.text}")