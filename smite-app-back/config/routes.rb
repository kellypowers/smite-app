Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :gods, only: [:index, :show]
  resources :items, only: [:index, :show]
  resources :items
  resources :god_builds
  post "/players", to: 'players#create'
  post "/find_player_matches", to: 'players#find_player_matches'
  post "/get_god_ranks", to: 'players#get_god_ranks'
  post "/get_player_achievements", to: 'players#get_player_achievements'
  post "/get_match_details", to: 'players#get_match_details'
end
