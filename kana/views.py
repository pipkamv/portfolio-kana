from django.shortcuts import render

def HomeView(request):
    return render(request, 'index-1.html')

def BlogView(request):
    return render(request, 'blog-01.html')

def ProfileView(request):
    return render(request, 'profile.html')

def ContactView(request):
    return render(request, 'contact-1.html')

def SingeView(request):
    return render(request, 'single.html')


