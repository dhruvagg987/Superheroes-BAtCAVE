from django.shortcuts import render
import requests
import json

def home(request):
    # api=requests.get("https://superheroapi.com/api/2620686038220622")
    # apic=json.loads(api.content)
    # print(api.content)
    return render(request,'templates/home.html',{})