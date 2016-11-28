Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	root 'welcome#index'

	get '/letters' => 'letters#index'

	get '/letters/show' => 'letters#show'

<<<<<<< HEAD
	get '/write' => 'writings#index'
	
  get '/drawings' => 'drawings#index'
=======
  get '/draw' => 'drawings#index'
>>>>>>> a5e8c2c8d624bd35f0496bcc71b4f844005fe907

end
