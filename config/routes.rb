Rails.application.routes.draw do
  get 'products/new'

  resources :products

  get :search, controller: :application

  root 'products#new'
end
