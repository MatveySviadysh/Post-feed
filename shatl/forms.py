from django import forms

class UserSearchForm(forms.Form):
    username = forms.CharField(label='Search for a user', max_length=100, required=False)
