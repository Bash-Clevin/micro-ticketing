chrome://net-internals/#sockets
local run
start minikube minikube start
check if ingress is running kubectl get pods --namespace=ingress-nginx
enable ingress on minikube minikube addons enable ingress
run skaffold skaffold dev


trouble shooting https://stackoverflow.com/questions/65182580/kubernetes-ingress-controller-error-imagepullbackoff
https://kubernetes.github.io/ingress-nginx/deploy/#minikube

kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission