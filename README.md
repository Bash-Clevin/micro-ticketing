gcloud init
gcloud auth login
gcloud auth application-default login
gcloud container clusters get-credentials ticketing-dev
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/cloud/deploy.yaml
