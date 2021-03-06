Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  get '/getstats', to: 'stats#index'

  namespace :api, defaults: {format: :json} do
    resources :invites, only: [:show, :edit, :index, :update]
    resources :searches, only: [:index]
  end
end
