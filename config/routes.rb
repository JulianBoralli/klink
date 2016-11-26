Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	root 'welcome#index'

	get '/letters' => 'letters#index'

	get '/letters/show' => 'letters#show'

    get '/draw' => 'draw#index'

  get '/draw/show' => 'draw#show'

end
