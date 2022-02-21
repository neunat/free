import os
phnumber = input('Enter Your Phone Number Here Remember To Put The Code Before You Put Your Number In Like "+91" if your number is in India..:')

number = phnumber


import phonenumbers

from phonenumbers import geocoder

from phonenumbers import carrier

import opencage

import folium 

pepnumber = phonenumbers.parse(number)

location = geocoder.description_for_number(pepnumber, "en")

print(location)

service_pro = phonenumbers.parse(number)

print(carrier.name_for_number(service_pro, "en"))


from open
key = "b6efaca5291c49cc96ccb24a3d91215a"
1c49cc96ccb24a3d91215a'

geocoder = OpenCageGeocode(key)

query = str(location)

results = geocoder.geocode(query)

# print(results)

lat = results[0]['geometry']['lat']
lng = results[0]['geometry']['lng']

print(lat)
print(lng)


myMap = folium.Map(location=[lat,lng], zoom_start=9)

folium.Marker([lat,lng], popup=location).add_to(myMap)

myMap.save("myLocation.html")





