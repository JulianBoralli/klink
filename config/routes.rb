Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	get '/letters' => 'letters#index'

	get '/letters/show' => 'letters#show'

	get '/write' => 'writings#index'

  get '/draw' => 'drawings#index'

  get '/memory' => 'memory#index'
  
  get '/math' => 'math#index'

  get '/home' => 'welcome#show'

  root 'welcome#index'

end
