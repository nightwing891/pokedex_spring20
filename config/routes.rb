Rails.application.routes.draw do
  # Api Routes
  namespace :api do
    resources :pokemons
  end
end
