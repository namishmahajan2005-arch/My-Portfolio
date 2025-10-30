from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
@api_view(['POST'])

def contact_view(request):
    name=request.data.get('name')
    email=request.data.get('email')
    message=request.data.get('message')
     
    send_mail(
        subject=f"New Message from {name}",
        message=f"Email: {email} \n\nMessage:\n{message}",
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=['namishmahajan2005@gmail.com']
    )

    return Response({'success':True,'message':'Email sent successfully'})
    

