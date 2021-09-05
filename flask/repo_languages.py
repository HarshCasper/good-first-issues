import requests
import os
from pprint import pprint

token = "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"


def get_languages(owner, title):
    query_url = f"https://api.github.com/repos/{owner}/{title}/languages"
    params = {
        "state": "open",
    }
    result_json = []
    headers = {'Authorization': f'token {token}'}
    result = requests.get(query_url, headers=headers, params=params)
    result_json.append(result.json().keys())
    return result_json


# pprint(get_languages(
#     "VishvamPorwal", "PharmAssist"))
