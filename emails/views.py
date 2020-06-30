from rest_framework import viewsets, serializers, response
from django.http import Http404
from emails.models import EmailMetadata, Sent, EmailAddress


class CauseSerializer(serializers.ModelSerializer):

    recipient = serializers.SerializerMethodField()

    def get_recipient(self, email_metadata):
        recipient_queryset = email_metadata.recipient
        if recipient_queryset is not None:
            return EmailAddressSerializer(recipient_queryset, many=True).data
        else:
            return []

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

    recipient = serializers.SerializerMethodField()

    def get_recipient(self, email_metadata):
        recipient_queryset = email_metadata.recipient
        if recipient_queryset is not None:
            return EmailAddressSerializer(recipient_queryset, many=True).data
        else:
            return []

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
            'recipient',
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
            'created',
        )


class SentListViewSet(viewsets.ModelViewSet):
    queryset = Sent.objects.all()
    serializer_class = SentListSerializer

    SUPPORTED_ACTIONS = ['get', 'post']

    def create(self, request, **kwargs):
        print(request.data)
        # import pdb; pdb.set_trace()
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


class EmailAddressSerializer(serializers.ModelSerializer):
    """
    Designed to be nested within a questions's endpoint, this gives enough
    information about each response to inform filtering
    """
    email_address = serializers.ReadOnlyField()

    class Meta:
        model = EmailAddress
        fields = (
            'email_address',
        )
