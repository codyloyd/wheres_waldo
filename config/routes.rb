Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'puzzles#index'
  get 'puzzles/:id/win_prompt/:time', :to => 'puzzles#win_prompt'
  get 'puzzles/:id/scores', :to => 'scores#puzzle_scores', as: "high_scores"
  resources :puzzles
  resources :scores
end
