class ScoresController < ApplicationController
  def create
    @puzzle = Puzzle.find(params[:score][:puzzle_id])
    @puzzle.scores.create(score: params[:score][:time], name: params[:score][:name])
    redirect_to puzzles_url
  end

  def puzzle_scores
    @puzzle = Puzzle.find(params[:id])
    @scores = @puzzle.scores.all.order(score: :asc)
  end

end
