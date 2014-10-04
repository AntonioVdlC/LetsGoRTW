from django.views.generic.base import RedirectView, TemplateView
from django.views.generic import ListView, DetailView

from itineraryFinder.models import Itinerary

# Index Page
class IndexView(TemplateView):
	template_name = 'itineraryFinder/index.html'
	context_object_name = 'countries'

	def get_context_data(self, **kwargs):
		context = super(IndexView, self).get_context_data(**kwargs)
		context['countries'] = []

		for itinerary in Itinerary.objects.all():
			if {'name': itinerary.country, 'code': itinerary.country_code} not in context['countries']:
				context['countries'].append({'name': itinerary.country, 'code': itinerary.country_code})

		# Sort context by context.name !!!
		context['countries'].sort()

		return context

# Results Page
class ResultsView(ListView):
	model = Itinerary
	template_name = 'itineraryFinder/results.html'
	context_object_name = 'rtwResults'

	def get_queryset(self):
		request = self.request
		
		itineraries = Itinerary.objects.filter(
			country_code = request.GET['country'],
			budget = request.GET['budget'],
			duration = request.GET['duration'],
		)

		date = int(request.GET['date'])

		rtwResults = []

		for itinerary in itineraries:
			if date in itinerary.dates:
				rtwResults.append(itinerary)

		return rtwResults

# Detail Page
class ItineraryDetailView(DetailView):
	model = Itinerary
	template_name = 'itineraryFinder/detail.html'
	context_object_name = 'rtw'

	def get_object(self):
		return Itinerary.objects(id=self.kwargs['pk'])[0]

# About Page
class AboutView(TemplateView):
	template_name = 'itineraryFinder/about.html'