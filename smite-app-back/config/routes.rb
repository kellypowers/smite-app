Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :gods, only: [:index, :show]
  resources :items, only: [:index, :show]
  resources :items
end
