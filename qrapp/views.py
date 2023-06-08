from django.shortcuts import render
from django.views import View
from .models import QRCodeData
# Create your views here.

def homeView(request):
    if request.method=='POST':
        scanned_data=request.POST.get('scanned_data')
        
        qrcode_data=QRCodeData(data=scanned_data)
        qrcode_data.save()
        return render(request,'success.html')
    else:
        return render(request, 'index.html')

def reviewView(request):
    qrcode_data=QRCodeData.objects.all()
    return render(request,'review.html',{'qrcode_data':qrcode_data})

def successView(request):
    return render(request,'success.html')