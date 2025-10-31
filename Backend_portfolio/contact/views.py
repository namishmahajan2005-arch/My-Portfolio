from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
@api_view(['POST'])

def contact_view(request):
    print("Request data:", request.data)
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if not all([name, email, message]):
        return Response(
            {'success': False, 'error': 'All fields (name, email, message) are required.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        send_mail(
            subject=f"New Message from {name}",
            message=f"Email: {email}\n\nMessage:\n{message}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['namishmahajan2005@gmail.com'],
        )
        return Response({'success': True, 'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'success': False, 'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

