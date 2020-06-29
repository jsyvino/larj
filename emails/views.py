from rest_framework import viewsets, serializers, response
from django.http import Http404
from emails.models import EmailMetadata, Sent


class CauseSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailMetadata
        fields = (
            'id',
            'subject',
            'body_text',
            'description',
            'victim_name',
            'city',
            'state',
            'recipient',
            'created',
            'modified'
        )
        read_only_fields = ('id', 'created', 'modified')


class CauseViewSet(viewsets.ModelViewSet):
    queryset = EmailMetadata.objects.all()
    serializer_class = CauseSerializer

    SUPPORTED_ACTIONS = ['get']


class CauseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailMetadata
        fields = (
            'id',
            'created',
            'subject',
            'body_text',
            'description',
            'victim_name',
            'city',
            'state',
        )
        read_only_fields = ('id',)


class CauseListViewSet(viewsets.ModelViewSet):
    queryset = EmailMetadata.objects.all()
    serializer_class = CauseListSerializer

    SUPPORTED_ACTIONS = ['get']


class SentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sent
        fields = (
            'id',
            'cause',
        )


class SentListViewSet(viewsets.ModelViewSet):
    queryset = EmailMetadata.objects.all()
    serializer_class = SentListSerializer

    SUPPORTED_ACTIONS = ['get', 'post']

    def create(self, request, **kwargs):
        cause_id = request.data.get("cause")
        try:
            cause = EmailMetadata.objects.get(pk=cause_id)
            Sent.objects.create(
                cause=cause,
                name=request.data.get("name")
            )
            resp = response.Response(
                {"cause": cause_id},
                status=201
            )
            return resp
        except EmailMetadata.DoesNotExist:
            raise Http404

