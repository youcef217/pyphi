#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# test/test_partition.py

import itertools

from pyphi.partition import (
    directed_bipartition, directed_tripartition_indices, k_partitions,
    partitions
)


def test_partitions():
    assert list(partitions([])) == []
    assert list(partitions([0])) == [[[0]]]
    assert list(partitions(range(4))) == [
        [[0, 1, 2, 3]],
        [[0], [1, 2, 3]],
        [[0, 1], [2, 3]],
        [[1], [0, 2, 3]],
        [[0], [1], [2, 3]],
        [[0, 1, 2], [3]],
        [[1, 2], [0, 3]],
        [[0], [1, 2], [3]],
        [[0, 2], [1, 3]],
        [[2], [0, 1, 3]],
        [[0], [2], [1, 3]],
        [[0, 1], [2], [3]],
        [[1], [0, 2], [3]],
        [[1], [2], [0, 3]],
        [[0], [1], [2], [3]]
    ]


def test_directed_bipartition():
    answer = [((), (1, 2, 3)), ((1,), (2, 3)), ((2,), (1, 3)), ((1, 2), (3,)),
              ((3,), (1, 2)), ((1, 3), (2,)), ((2, 3), (1,)), ((1, 2, 3), ())]
    assert answer == directed_bipartition((1, 2, 3))
    # Test with empty input
    assert [] == directed_bipartition(())


def test_directed_tripartition_indices():
    assert directed_tripartition_indices(0) == []
    assert directed_tripartition_indices(2) == [
        ((0, 1), (), ()),
        ((0,), (1,), ()),
        ((0,), (), (1,)),
        ((1,), (0,), ()),
        ((), (0, 1), ()),
        ((), (0,), (1,)),
        ((1,), (), (0,)),
        ((), (1,), (0,)),
        ((), (), (0, 1))]


def test_k_partition():
    # Special/edge cases
    for n, k in list(itertools.product(range(-1, 2), repeat=2))[:-1]:
        assert list(k_partitions(range(n), k)) == []
    # Large case
    assert list(k_partitions(range(5), 3)) == [
        [[0, 1, 2], [3], [4]],
        [[0, 1], [2, 3], [4]],
        [[0], [1, 2, 3], [4]],
        [[0, 2], [1, 3], [4]],
        [[0, 2, 3], [1], [4]],
        [[0, 3], [1, 2], [4]],
        [[0, 1, 3], [2], [4]],
        [[0, 1], [2], [3, 4]],
        [[0], [1, 2], [3, 4]],
        [[0, 2], [1], [3, 4]],
        [[0], [1], [2, 3, 4]],
        [[0], [1, 3], [2, 4]],
        [[0, 3], [1], [2, 4]],
        [[0, 3], [1, 4], [2]],
        [[0], [1, 3, 4], [2]],
        [[0], [1, 4], [2, 3]],
        [[0, 2], [1, 4], [3]],
        [[0], [1, 2, 4], [3]],
        [[0, 1], [2, 4], [3]],
        [[0, 1, 4], [2], [3]],
        [[0, 4], [1, 2], [3]],
        [[0, 2, 4], [1], [3]],
        [[0, 4], [1], [2, 3]],
        [[0, 4], [1, 3], [2]],
        [[0, 3, 4], [1], [2]]
    ]
