# I have Created this file - Bhavya
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request,'index.html')
    # return HttpResponse("Home")

def analyze(request):
    #Get the text
    djtext=request.POST.get('text','default')

    #Check checkbox values
    removepunc = request.POST.get('removepunc', 'off')
    fullcaps = request.POST.get('fullcaps', 'off')
    newlineremover = request.POST.get('newlineremover', 'off')
    extraspaceremover = request.POST.get('extraspaceremover', 'off')
    charactercounter = request.POST.get('charactercounter', 'off')
    

    #Check which checkbox is on
    if removepunc == 'on':
        punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        analyzed=""
        for char in djtext:
            if char not in punctuations:
                analyzed=analyzed+char
        params={'purpose':'remove Punctuations','analyzed_text':analyzed}
        djtext=analyzed
        # return render(request,'analyze.html',params)
    if(fullcaps=="on"):
        analyzed=""
        for char in djtext:
            analyzed=analyzed+char.upper()
        params = {'purpose': 'Changed to Uppercase', 'analyzed_text': analyzed}
        #analyze the text
        djtext=analyzed
        # return render(request, 'analyze.html', params)
    if(extraspaceremover=="on"):
        analyzed = ""
        for index,char in enumerate(djtext):
            if not(djtext[index]==" " and djtext[index+1]==" "):
                analyzed = analyzed+char
        params = {'purpose': 'Removed NewLines', 'analyzed_text': analyzed}
        #analyze the text
        djtext=analyzed
        # return render(request, 'analyze.html', params)
    if(newlineremover == "on"):
        analyzed = ""
        for char in djtext:
            if char != "\n" and char!="\r":
                analyzed = analyzed+char
        params = {'purpose': 'Removed NewLines', 'analyzed_text': analyzed}
        #analyze the text
        djtext=analyzed
        # return render(request, 'analyze.html', params)
    if(charactercounter == "on"):
        analyzed = len(djtext)
        params = {'purpose': 'Removed NewLines', 'analyzed_text': analyzed}
        #analyze the text
        djtext=analyzed
        # return render(request, 'analyze.html', params)
    if removepunc!='on' and newlineremover!='on' and charactercounter!='on' and extraspaceremover!='on' and fullcaps!='on':
        return HttpResponse(" please select any operation and try again ")
    # else:
    #     return HttpResponse("Error")
    return render(request, 'analyze.html', params)
