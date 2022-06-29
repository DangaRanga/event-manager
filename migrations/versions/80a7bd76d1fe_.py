"""empty message

Revision ID: 80a7bd76d1fe
Revises: 95903db2c9ae
Create Date: 2022-06-29 14:11:29.973409

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '80a7bd76d1fe'
down_revision = '95903db2c9ae'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('end_date', sa.DateTime(), nullable=True))
    op.add_column('events', sa.Column('start_time', sa.String(length=10), nullable=True))
    op.drop_column('events', 'end_dat')
    op.drop_column('events', 'start_tim')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('start_tim', mysql.VARCHAR(length=10), nullable=True))
    op.add_column('events', sa.Column('end_dat', mysql.DATETIME(), nullable=True))
    op.drop_column('events', 'start_time')
    op.drop_column('events', 'end_date')
    # ### end Alembic commands ###