class PuzzlesController < ApplicationController
  def index
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.find(params[:id])
    gon.puzzle_id = @puzzle.id
    gon.solution_x = @puzzle.solution_x
    gon.solution_y = @puzzle.solution_y
  end

  def win_prompt
    @time = params[:time].to_i
    @puzzle = Puzzle.find(params[:id])
    @score = @puzzle.scores.new(score: @time)
    render :layout => false
  end
end
