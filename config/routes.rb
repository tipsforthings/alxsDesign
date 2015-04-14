Rails.application.routes.draw do
  resources :profiles

  resources :categories

  devise_for :users
  mount Ckeditor::Engine => '/ckeditor'

  resources :articles

  resources 'projects'
  resources 'user_steps'
  match '/about',        to: 'main#about',               via: 'get'
  match '/blog',        to: 'articles#index',               via: 'get'
  match '/portfolio',        to: 'portfolio#index',               via: 'get'
  match '/contact',        to: 'contacts#new',               via: 'get'
  match '/location',        to: 'main#location',               via: 'get'
  match '/column',        to: 'column#index',               via: 'get'
  match '/sidebar',        to: 'sidebar#index',               via: 'get'
  match '/animulti',        to: 'animulti#index',               via: 'get'
  resources "contacts", only: [:new, :create]
  root 'main#home'
  get 'main/help'
  get 'main/contact'
  get 'main/terms'
  get 'main/privacy'
  get 'main/about'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
