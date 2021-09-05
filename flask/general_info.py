import requests
import os
from pprint import pprint

token = "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"


def get_info(owner, title):
    query_url = f"https://api.github.com/repos/{owner}/{title}"
    params = {
        "state": "open",
    }
    result_json = []
    headers = {'Authorization': f'token {token}'}
    result = requests.get(query_url, headers=headers, params=params)
    result_json = result.json()
    return result_json


# pprint(get_info(
#     "VishvamPorwal", "Festive-Mania"))
