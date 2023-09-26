from django.shortcuts import render, redirect
from .forms import *
from .models import Invoice
# Create your views here.
def home(request):
	title = 'Welcome: This is the Home Page'
	context = {
	"title": title,
	}
	return render(request, "home.html",context)

def add_invoice(request):
	form = InvoiceForm(request.POST or None)
	if form.is_valid():
		form.save()
		return redirect('/add_invoice')
	context = {
		"form": form,
		"title": "New Invoice",
	}
	
	return render(request, "add_invoice.html", context)

def list_invoice(request):
	title = 'List of Invoices'
	queryset = Invoice.objects.all()
	context = {
		"title": title,
		"queryset": queryset,
	}

	form = InvoiceSearchForm(request.POST or None)

	if request.method == 'POST':
		queryset = Invoice.objects.filter(invoice_number__icontains=form['invoice_number'].value(), name__icontains=form['name'].value())
		context = {
			"form": form,
			"title": title,
			"queryset": queryset,
		}
	return render(request, "list_invoice.html", context)


def update_invoice(request, pk):
	queryset = Invoice.objects.get(id=pk)
	form = InvoiceUpdateForm(instance=queryset)
	if request.method == 'POST':
		form = InvoiceUpdateForm(request.POST, instance=queryset)
		if form.is_valid():
			form.save()
			return redirect('/list_invoice')

	context = {
		'form':form
	}
	return render(request, 'home.html', context)