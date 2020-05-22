from django.shortcuts import render
import requests
import json
# Create your views here.
def home(request):
    api=requests.get("https://cors-anywhere.herokuapp.com/superheroapi.com/api/2620686038220622/644")
    # apic=json.loads(api.content)
    print(api)
    return render(request,'templates/home.html',{})