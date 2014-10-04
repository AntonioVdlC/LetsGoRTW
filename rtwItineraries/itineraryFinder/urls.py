from django.conf.urls import patterns, url

from itineraryFinder import views

urlpatterns = patterns('',
	# ex: /
	url(r'^$', views.IndexView.as_view(), name = 'index'),
	#ex: /search/
	url(r'^search/$', views.ResultsView.as_view(), name = 'search'),
	#ex: /rtw/4/
	url(r'^rtw/(?P<pk>[\w\d]+)/$', views.ItineraryDetailView.as_view(), name = 'detail'),
	#ex: /about/
	url(r'^about/$', views.AboutView.as_view(), name = 'about'),
)