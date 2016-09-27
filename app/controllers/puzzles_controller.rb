class PuzzlesController < ApplicationController
  def show
    @puzzle = Puzzle.find(params[:id])
    gon.solution_x = @puzzle.solution_x
    gon.solution_y = @puzzle.solution_y
  end
end
