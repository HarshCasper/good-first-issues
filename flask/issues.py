import requests
import os
from pprint import pprint

token = "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"


def get_issues(owner, title):
    query_url = f"https://api.github.com/repos/{owner}/{title}/issues"
    params = {
        "state": "open",
    }
    result_json = []
    headers = {'Authorization': f'token {token}'}
    result = requests.get(query_url, headers=headers, params=params)
    result_json = result.json()
    return result_json


# pprint(get_issues(
#     "VishvamPorwal", "Festive-Mania"))
