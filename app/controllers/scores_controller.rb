class ScoresController < ApplicationController
  def create
    @puzzle = Puzzle.find(params[:score][:puzzle_id])
    score = @puzzle.scores.new(score: params[:score][:time], name: params[:score][:name])
    if score.name == ""
      score.name = "anonymous"
    end
    score.save
    redirect_to puzzles_url
  end

  def puzzle_scores
    @puzzle = Puzzle.find(params[:id])
    @scores = @puzzle.scores.all.order(score: :asc)
  end

end
