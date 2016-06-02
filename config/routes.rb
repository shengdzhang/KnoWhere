Rails.application.routes.draw do

  devise_for :users

  root to: 'static_pages#root'

  resources :jobs, only: [:create, :index, :show, :update, :delete] do
    member do
      put '/upriority' => 'jobs#upriority'
    end
  end

  resources :appointments, only: [:create, :index, :show, :update, :delete] do
    member do
      put '/upriority' => 'comments#upriority'
    end
  end



end
