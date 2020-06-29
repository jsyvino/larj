from django.urls import path
from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from emails.views import CauseViewSet, CauseListViewSet, SentListViewSet


router = DefaultRouter()
router.register(r'cause', CauseViewSet)

cause_api = CauseViewSet.as_view({
    'get': 'retrieve',
})

cause_api_list = CauseListViewSet.as_view({
    'get': 'list',
})

sent_api_list = SentListViewSet.as_view({
    'get': 'list',
    'post': 'create',
})


urlpatterns = [
    url(r'cause/(?P<pk>[- \w]+)[/]$', cause_api, name='cause-detail'),
    url(r'cause/$', cause_api_list, name='cause-list'),
    url(r'sent/$', sent_api_list, name='sent-list'),
]
