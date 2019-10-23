Rails.application.routes.draw do
  get 'products/new'

  resources :products do
    resources :properties do
      resources :product_properties
    end
  end

  get :search, controller: :application

  root 'products#new'
end
