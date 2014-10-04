#from django.db import models
from mongoengine import *

from django.core.urlresolvers import reverse

# Create your models here.
class Itinerary(Document):
	title = StringField(max_length=200)
	short_description = StringField(max_length=100)
	description = StringField(max_length=300)
	budget = IntField()
	duration = IntField()
	country = StringField(max_length=50)
	country_code = StringField(max_length=2)
	dates = ListField(IntField())
	mapid = StringField(max_length=200)

	def __unicode__ (self):
		return self.title

	def get_absolute_url(self):
		print self.id
		return reverse('detail', args=[self.id])